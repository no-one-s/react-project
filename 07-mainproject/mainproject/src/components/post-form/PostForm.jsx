import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',//if post exists, set the default value of title to post.title, otherwise set it to an empty string.
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
            // image: post?.featuredImage || null, // image is not a string, it's an object, so we can't set it as a default value. We will handle it separately in the form.
        }
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null //in data we have image as an array of files, so we need to check if the first file exists and then upload it. If it doesn't exist, we set file to null.
            if (file) {
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        } else {

            const file = await appwriteService.uploadFile(data.image[0])
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            const slug = value
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9\s]+/g, '-')
                .replace(/\s/g, '-')
            return slug
        } else {
            return ''
        }
    }, [])
    // useCallback is a React hook that returns a memoized version of the callback function 
    // that only changes if one of the dependencies has changed.
    //  In this case, slugTransform will only be recreated if its dependencies change, which are none in this case.
    //  This is useful for performance optimization, especially when passing functions to child components that 
    // rely on reference equality to prevent unnecessary renders.
    
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })
            }
        });
        return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue])
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
