import React from 'react';

const Stepper = ({ currentStep }) => {
    const steps = ['Shipping', 'Review & Payments'];

    return (
        <div className="flex justify-center items-center gap-8">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div className="flex items-center flex-col">
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep > index
                                ? 'border-blue-500 text-blue-500'
                                : currentStep === index
                                    ? 'border-blue-500 text-blue-500'
                                    : 'border-gray-300 text-gray-400'
                                }`}
                        >
                            {currentStep >= index ? '✓' : index + 1}
                        </div>
                        <div
                            className={`text-sm mt-1 ${currentStep >= index ? 'text-black' : 'text-gray-400'
                                }`}
                        >
                            {step}
                        </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={`w-20 h-0.5 ${currentStep >= index ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Stepper;
