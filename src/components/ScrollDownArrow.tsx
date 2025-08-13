import { useTranslation } from 'react-i18next';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

interface ScrollDownArrowProps {
    href: string;
}

const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ href }) => {
    const { t } = useTranslation();

    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href={href} aria-label={t('scrollDownAriaLabel') || 'Scroll down'}>
                <ArrowDownIcon className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-bounce" />
            </a>
        </div>
    );
};

export default ScrollDownArrow;