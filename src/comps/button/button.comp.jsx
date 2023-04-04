
import './button.styles.jsx'
import {ButtonContainer} from './button.styles.jsx'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return(
        <ButtonContainer className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </ButtonContainer>
    )
    
}
export default Button