import React, { useState } from 'react'
import { useUserProvider } from '@Hooks/user'
import { Card, Descriptions, Image, Typography, Button, Input } from 'antd'
import userAvatar from '../../Assets/Images/avatar.png'
import { EditFilled } from '@ant-design/icons'
import propTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'

export default function UserDataDisplay() {
    const { user } = useUserProvider()
    const [isEditing, setIsEditing] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control,
    } = useForm()
    const onSubmit = (data) => {
        //firebase.auth().createUserWithEmailAndPassword()
        onEditFinished()
    }

    return (
        <Card className="card">
            {isEditing && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Descriptions title="User Info">
                        <Descriptions.Item label="UserName">
                            <Controller
                                name="displayName"
                                control={control}
                                defaultValue={user.displayName}
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        value={user.displayName}
                                    />
                                )}
                            />
                        </Descriptions.Item>
                        <Descriptions.Item label="Email">
                            <Controller
                                name="displayName"
                                control={control}
                                defaultValue={user.email}
                                render={({ field }) => (
                                    <Input
                                        type="email"
                                        {...field}
                                        value={user.email}
                                    />
                                )}
                            />
                        </Descriptions.Item>
                    </Descriptions>
                    <div className="form-right-actions">
                        <Button type="primary">Save</Button>
                    </div>
                </form>
            )}
            {!isEditing && (
                <div>
                    <div className="card-actions">
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<EditFilled />}
                            onClick={(e) => {
                                e.preventDefault()
                                setIsEditing(true)
                            }}
                        />
                    </div>
                    <Image
                        src={user.photoUrl ? user.photoUrl : userAvatar}
                        className="user-avatar-preview"
                    />

                    <Descriptions title="User Info" layout="horizontal">
                        <Descriptions.Item label="Displayname">
                            {user.displayName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Email">
                            {user.email}
                        </Descriptions.Item>
                    </Descriptions>
                </div>
            )}
        </Card>
    )
}
