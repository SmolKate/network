import { Form, Field } from "formik";
import s from './UserInfo.module.css';


const ProfileDataForm = (props) => {
    console.log(props.status)
    return (
        <Form>
            <button type='submit'>Save</button>
            <div>
                {!!props.status && <div>{props.status}</div>}
            </div>
            <div>
                <div>
                    <label htmlFor='fullName'><b>Full Name</b>: </label>
                </div>
                <Field name='fullName' type='text' />
            </div>
            <div>
                <div>
                    <label htmlFor='lookingForAJob'><b>Looking for a job</b>: </label>
                </div>
                <Field name='lookingForAJob' type='checkbox' /> yes
            </div>
            <div>
                <div>
                    <label htmlFor='lookingForAJobDescription'><b>My professional skils</b>: </label>
                </div>
                <Field name='lookingForAJobDescription' component='textarea' />
            </div>
            <div>
                <div>
                    <label htmlFor='aboutMe'><b>About me</b>: </label>
                </div>
                <Field name='aboutMe' component='textarea' />
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map( key => {
                    let newKey = key[0].toUpperCase() + key.slice(1);
                    console.log(newKey)
                    const regex = new RegExp(`${newKey}`)
                    let message
                    if (props.status) {
                        message = props.status.map ( msg => {if (msg.match(regex)) { return msg.replace(/\((\w+)->(\w+)\)/, '')}} ) }
                    return <div className={s.contacts}>
                        <div>
                            <label htmlFor={key}><b>{key}</b>: </label>
                        </div>
                        <Field key={key} name={'contacts.'+key} type='text' placeholder={key} />
                        {!!message && <div>{message}</div>} 
                        </div>
                })}
            </div>
            
        </Form>
    )
}

export default ProfileDataForm;