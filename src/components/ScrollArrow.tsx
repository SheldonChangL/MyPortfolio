import { useTranslation } from 'react-i18next';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

interface ScrollArrowProps {
    href: string;
    direction: 'up' | 'down';
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ href, direction }) => {
    const { t } = useTranslation();

    const isUp = direction === 'up';
    const Icon = isUp ? ArrowUpIcon : ArrowDownIcon;
    const ariaLabel = isUp ? t('scrollTopAriaLabel') : t('scrollDownAriaLabel');

    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <a href={href} aria-label={ariaLabel || (isUp ? 'Scroll to top' : 'Scroll down')}>
                <Icon className="h-8 w-8 text-gray-500 dark:text-gray-400 animate-bounce" />
            </a>
        </div>
    );
};

export default ScrollArrow;