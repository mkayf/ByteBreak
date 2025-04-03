import React, { useCallback } from 'react'
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

  return (
    <div>PostForm</div>
  )
}

export default PostForm