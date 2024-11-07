const TextInputStyles = {
    background: '$background2',
    color: '$textLight',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '12px 16px',
    gap: '4px',
    border: '2px solid $background4',
    borderRadius: '4px',
    flex: 'none',
    order: 1,
    flexGrow: 0,
    width: '635px',
    height: '48px',
    '&:focus': {
        outline: 'none',
        background: '$background2',
    },
};

export default TextInputStyles;
