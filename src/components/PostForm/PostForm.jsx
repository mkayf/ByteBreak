import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import storageService from '../../appwrite/storage'
import databaseService from '../../appwrite/database'
import {Input, Button, Select, RTE} from '../index'

function PostForm({post}) {
 
 const {register, handleSubmit, getValues, setValue, watch, control} = useForm({
    defaultValues : {
        title : post?.title || '',
        slug : post?.slug || '',
        content : post?.content || '',
        status : post?.status || ''
    }
 });

 const navigate = useNavigate();
 const userData = useSelector(state => state.auth.userData);

 const submit = async (data) => {
    if(post){
        const file = data.image[0] ? storageService.uploadFile(data.image[0]) : null;

        if(file){
            storageService.deleteFile(post.featured_img);
        }

        const dbPost = await databaseService.updatePost(post.$id, {
            ...data,
            featured_img : file ? file.$id : undefined
        })
 
        if(dbPost){
            navigate(`/post/${dbPost.$id}`)
        }
    }
    else{
          const file = await storageService.uploadFile(data.image[0]);
          if(file){

            const fileId = file.$id;
            data.featurd_img = fileId;
            const dbPost = await databaseService.createPost({
                ...data,
                userId : userData.$id
            })

            if(dbPost){
                navigate(`/post/${dbPost.$id}`);
            }

          }
    }
 }

 const slugTransformation = useCallback((value) => {
    if(value && typeof value === 'string'){
        return value.trim().toLowerCase().replace(/^[a-zA-Z\d\s]+/g, '-').replace(/\s/g, '-');
    }

    return '';
 }, [])


 useEffect(() => {
    const subscription = watch((value, {name}) => {
        if(name === 'title'){
            setValue('slug', slugTransformation(value.title, {shouldValidate : true}));
        }
    })

    return () => {
        subscription.unsubscribe();
    }

 }, [watch, slugTransformation, setValue])


  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
        <div className='w-2/3 px-2'>
            <Input label="Title :" placeholder="Title" className="mb-4" {...register('title', {
                required : true
            })} />
            <Input label="Slug: " placeholder="Slug" className="mb-4" {
                ...register('slug', {
                    required : true
                })}
                onInput={(e) => {
                    setValue('slug', slugTransformation(e.currentTarget.value, {shouldValidate : true}));
                }} />
            <RTE label="Content: " name="content" control={control} defaultValue={getValues('content')} />
        </div>
        <div className='w-1/3 px-2'>
            <Input label="Featured Image: " type="file" className="mb-4" accept="image/gif" {...required('image', {required : !post})} />    
            {post && (
                <div className='w-full mb-4'>
                    <img src={storageService.getFilePreview(post.featurd_img)} alt={post.title} className='rounded-lg' />
                </div>
            )}
            <Select options={['active', 'inactive']}
            label="Status: "
            className="mb-4" {...register('status', {
                required : true
            })} />
            <Button type='submit' bgColor={post ? "bg-green-500" : undefined}
            className='w-full'
             >
                {post ? 'Update' : 'Submit'}
            </Button>
        </div>
    </form>
  )
}

export default PostForm