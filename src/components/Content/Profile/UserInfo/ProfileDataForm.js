import { Form, Field } from "formik";
import s from './UserInfo.module.css';
import er from '../../../../common/error.module.css'


const ProfileDataForm = ({ errors, touched, status, ...props }) => {
    console.log(status)
    return (
        <Form className={s.profileData}>
            <div className={s.userInfo}>
                <div className={s.userNameStatusForm + ' ' + (!!errors.fullName && s.errorArea)}>
                    <div>
                        <label htmlFor='fullName'><b>Full Name</b>: </label>
                    </div>
                    <Field name='fullName' type='text' />
                    {errors.fullName && <div className={s.errorMsg}>{errors.fullName}</div>}
                </div>
                <div className={s.aboutMe + ' ' + (!!errors.aboutMe && s.errorArea)}>
                    <div>
                        <label htmlFor='aboutMe'><b>About me</b>: </label>
                    </div>
                    <Field name='aboutMe' component='textarea' />
                    {errors.aboutMe && <div className={s.errorMsg}>{errors.aboutMe}</div>}
                </div>
                <div className={s.lookJobForm}>
                    <div className={s.checkbox}>
                        <label htmlFor='lookingForAJob'><b>Looking for a job</b>: </label>
                    </div>
                    <Field name='lookingForAJob' type='checkbox' /> yes
                </div>
                <div className={s.profSkills + ' ' + (!!errors.lookingForAJobDescription && s.errorArea)}>
                    <div>
                        <label htmlFor='lookingForAJobDescription'><b>My professional skils</b>: </label>
                    </div>
                    <Field name='lookingForAJobDescription' component='textarea' />
                    {errors.lookingForAJobDescription && <div className={s.errorMsg}>{errors.lookingForAJobDescription}</div>}
                </div>
                <div className={s.saveBtn}>
                    <button type='submit'>Save</button>
                </div>
            </div>
            
            <div className={s.contacts}>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map( key => {
                    let newKey = key[0].toUpperCase() + key.slice(1);
                    const regex = new RegExp(`${newKey}`)
                    let message
                    if (status) {
                        message = status.filter(msg => msg.match(regex)).map( msg => msg.replace(/\((\w+)->(\w+)\)/, '')) }
                    console.log(message)
                    return <div className={ (!!message && message.length > 0) ? s.contactItem + ' ' + s.errorArea : s.contactItem}>
                            <div>
                                <label htmlFor={key}><b>{key}</b>: </label>
                            </div>
                            <div>
                                <Field key={key} name={'contacts.'+key} type='text' placeholder={key} />
                                { !!message && message.length > 0 && <div className={s.errorMsg}>{message}</div>} 
                            </div>
                        </div>

                })}
            </div>
            
        </Form>
    )
}

export default ProfileDataForm;