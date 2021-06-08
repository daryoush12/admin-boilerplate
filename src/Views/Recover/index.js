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
                    <Typography.Title>Recover account</Typography.Title>
                    <Typography.Paragraph>
                        Provide email you used to login with. You will receive
                        reset instructions via email if we find any matches.
                    </Typography.Paragraph>
                    <form onSubmit={handleSubmit}>
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
                            <input type="submit" />
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}
