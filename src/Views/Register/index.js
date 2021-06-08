import React from 'react'
import { Card, Typography, Upload, Input } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import firebase from 'firebase/app'
import Paragraph from 'antd/lib/skeleton/Paragraph'

export default function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        control,
    } = useForm()
    const onSubmit = (data) => {
        //firebase.auth().createUserWithEmailAndPassword()
        console.log(data)
    }

    console.log(watch('example')) // watch input value by passing the name of it
    return (
        <div className="view" style={{ alignItems: 'center' }}>
            <div className="view-row">
                <Card>
                    <Typography.Title>Registration form </Typography.Title>
                    <Typography.Paragraph>
                        Ipsum solem nice text about getting user to sign up. We
                        want to tell them how much we appreciate them.
                    </Typography.Paragraph>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="photoUrl">
                                Upload avatar image
                            </label>
                            <Controller
                                name="photoUrl"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <Upload {...field} />}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Firstname</label>
                            <Controller
                                name="firstname"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input type="text" {...field} />
                                )}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">lastname</label>
                            <Controller
                                name="lastname"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input type="text" {...field} />
                                )}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input type="text" {...field} />
                                )}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input type="password" {...field} />
                                )}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <Controller
                                name="password_repeat"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Input type="password" {...field} />
                                )}
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit" />
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}
