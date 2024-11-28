export const ProductOptions = ({ options }: { options: any[] }) => (
    <ul>
        {options.map((option) => (
            <li key={option.name}>
                <small className='text-[#30363C] text-[8px] font-medium leading-4'>
                    ({option.value})
                </small>
            </li>
        ))}
    </ul>
);

