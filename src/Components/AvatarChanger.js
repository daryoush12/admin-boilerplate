import React, { useState } from 'react'
import { Upload, message, Progress } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import firebase from 'firebase/app'

export default function FileInput() {
    const [loading, setLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [uploadProgress, setUploadProgess] = useState(0)

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )

    function getBase64(img, callback) {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result))
        reader.readAsDataURL(img)

        // Create a reference to 'mountains.jpg'
        var mountainsRef = storageRef.child(`avatar-images/${img}.jpg`)
    }

    function beforeUpload(file) {
        const isJpgOrPng =
            file.type === 'image/jpeg' || file.type === 'image/png'
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!')
        }
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!')
        }
        return isJpgOrPng && isLt2M
    }

    async function uploadFile(info) {
        if (info.file.status === 'uploading') {
            setUploadProgess(info.file.percent)
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            console.log(info)
            var mountainsRef = storageRef.child(
                `avatar-images/${info.file.id}.jpg`
            )

            mountainsRef.put(info.file.originFileObj).then((snapshot) => {
                console.log('Uploaded a file')
                setLoading(false)
            })
        }
    }

    console.log(message)

    return (
        <Card>
            <div>
                <Upload
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={uploadFile}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{ width: '100%' }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
                <div>{message && 'sdf'}</div>
                <Progress percent={uploadProgress * 100} />
            </div>
        </Card>
    )
}
