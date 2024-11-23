export type SubscriptionRadioProps<T = string> = {
  value?: T;
  isSelected?: boolean;
  isDisabled?: boolean;
  onChange?: (value: T) => void;
  name?: string;
};

const radioStyles = {
  container: `
    flex items-center cursor-pointer w-full p-4 rounded-lg border transition-all
    focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2
  `,
  containerStates: {
    selected: 'border-black',
    default: 'border-gray-300',
    disabled: 'opacity-50 cursor-not-allowed',
    hover: 'hover:border-gray-400',
  },
  input: `
     lg:w-5 lg:h-5 appearance-none border-2 rounded-full transition-all flex
    focus:outline-none
    sm:w-4 sm:h-4
  `,
  inputStates: {
    selected: 'border-[#1B1F23]',
    default: 'border-[#1B1F23]',
  },
  dot: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#1B1F23]',
  label: 'text-lg font-medium',
  price: 'text-lg font-medium',
  saveText: 'text-sm text-gray-600',
};

export const RadioButton = <T extends string>({
  value,
  isSelected = false,
  isDisabled = false,
  onChange,
  name,
}: SubscriptionRadioProps<T>) => {
  const id = `${name}-${value}`;

  return (
    <div className="flex items-center gap-4">
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value as string}
          checked={isSelected}
          disabled={isDisabled}
          onChange={(e) => onChange?.(e.target.value as T)}
          className={`
                ${radioStyles.input}
                ${isSelected
              ? radioStyles.inputStates.selected
              : radioStyles.inputStates.default
            }
              `}
        />
        {isSelected && <div className={radioStyles.dot} />}
      </div>
    </div>
  );
};
