interface buttonProps {
    onClick: () => void;
};

export const Button = (props: buttonProps) => {
    const { onClick } = props;
    return (<button data-testid="button" onClick={onClick} onKeyPress={()=>{}}>
    </button>)
}