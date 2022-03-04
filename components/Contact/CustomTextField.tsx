import { ChangeEventHandler } from 'react'
import style from '../../styles/CustomTextField.module.css'

type TElement = 'input' | 'textarea'
type TType =
    | 'text'
    | 'number'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'time'
    | 'url'
    | 'week'

interface IProps {
    placeholder: string
    value: any
    onChange: ChangeEventHandler
    element: TElement
    name: string
    type?: TType
    min?: number
}

const CustomTextField = ({
    placeholder,
    value,
    onChange,
    element,
    name,
    type,
    min,
}: IProps) => {
    const props = min
        ? { value, onChange, name, min }
        : { value, onChange, name }

    const inputElement =
        element === 'input' ? (
            <input placeholder=" " {...props} type={type} />
        ) : (
            <textarea placeholder=" " {...props} />
        )

    return (
        <label className={style.container}>
            {inputElement}
            <span>{placeholder}</span>
        </label>
    )
}

export default CustomTextField
