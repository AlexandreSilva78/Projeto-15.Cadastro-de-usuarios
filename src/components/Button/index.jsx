import PropTypes from 'prop-types';
import { MyButton } from './styles'

function DefaultButton ({children, $variant, ...props}){
    
    return (
        <MyButton {...props} $variant={$variant}>{children}</MyButton>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string
}

export default DefaultButton