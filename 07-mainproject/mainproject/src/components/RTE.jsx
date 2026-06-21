import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import conf from '../../conf/conf';


export default function RTE({ name, control, label, defaultValue = post.content }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field }) => (
                    <Editor 
                        value={field.value}
                        onEditorChange={field.onChange}
                        apiKey= {conf.tinyMCEAPIKEY}
                        initialValue={defaultValue}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                                "tinymceai",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help | tinymceai",
                            tinymceai_token_provider: async () => {
                                await fetch('https://demo.api.tiny.cloud/1/plj7jcms87eaqtppbe0zqst4demp444dtuxffmsrcbfo0md8/auth/random', { method: "POST", credentials: "include" });
                                return {
                                    token: await fetch('https://demo.api.tiny.cloud/1/plj7jcms87eaqtppbe0zqst4demp444dtuxffmsrcbfo0md8/jwt/tinymceai', { credentials: "include" }).then(r => r.text())
                                };
                            },
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        
                    />
                )}
            />

        </div>
    )
}
