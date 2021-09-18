import React from 'react';

/**
 * Emoji props.
 */
interface EmojiProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Optional aria-label for the Emoji.
     */
    label?: string;
    /**
     * The Emoji symbol.
     */
    symbol: string;
}
/**
 * Emoji component.
 *
 * @param {EmojiProps} props Props being passed in.
 * @returns {React.ReactElement<EmojiProps>} Custom Emoji component.
 */
const Emoji = (props: EmojiProps): React.ReactElement<EmojiProps> => {
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
