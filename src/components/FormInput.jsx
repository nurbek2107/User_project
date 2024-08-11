'use client'
// css
import './components.css'

function FormInput({ label, type }) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <label htmlFor="inputWrite" className="label-text text-base">{label}</label>
            </div>
            <input id="inputWrite" type={type} placeholder="Write here..." name="text" className="input-write" />
        </label>
    )
}

export default FormInput