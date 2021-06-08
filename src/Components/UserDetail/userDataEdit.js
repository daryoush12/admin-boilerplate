import React from 'react'
import { useUserProvider } from '@Hooks/user'
import { Card, Descriptions, Image, Typography, Button, Input } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import propTypes from 'prop-types'

export default function UserDataEdit({ onEditFinished }) {
    const { user } = useUserProvider()
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">
                        <Controller
                            name="displayName"
                            control={control}
                            defaultValue={user.displayName}
                            render={({ field }) => (
                                <Input {...field} value={user.displayName} />
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
        </div>
    )
}

UserDataEdit.propTypes = {
    onEditFinished: propTypes.func,
}

UserDataEdit.defaultProps = {
    onEditFinished: () => {},
}
