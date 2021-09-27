import Emoji from '../components/Emoji';

const props = {
    label: 'Happy face',
    symbol: '😀',
    className: 'outline',
};
describe('Emoji Component Tests', () => {
    test('Label passed, aria-hidden is undefined', () => {
        const output = Emoji(props);
        expect(output.props['aria-hidden']).toBe(undefined);
        expect(output.props['aria-label']).toMatch(props.label);
    });

    test('Undefined label, aria-hidden becomes true', () => {
        const output = Emoji({ symbol: props.symbol });
        expect(output.props['aria-hidden']).toBe(true);
        expect(output.props['aria-label']).toBe(undefined);
    });

    test('Sets the passed properties on the component', () => {
        const output = Emoji(props);
        expect(output.props.className).toMatch(props.className);
    });
});
