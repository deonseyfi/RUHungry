import React from 'react';

interface EmojiProps extends React.HTMLAttributes<HTMLSpanElement> {
    label?: string;
    symbol: string;
}

const Emoji = (props: EmojiProps) => {
    const { label, symbol, ...rest } = props;
    return (
        <span aria-hidden={label ? undefined : true} aria-label={label || undefined} role='img' {...rest}>
            {symbol}
        </span>
    );
};

Emoji.defaultProps = {
    label: null,
};

export default Emoji;
