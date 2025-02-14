import { Skeleton } from "@/shared/ui/skeleton/Skeleton";
import clsx from "clsx";
import styles from "./UserCardSkeleton.module.sass";

interface UserCardSkeletonProps {
	className?: string;
}

export const UserCardSkeleton = ({ className }: UserCardSkeletonProps) => {
	return (
		<div className={clsx(styles.userCard, className)}>
			<Skeleton className={styles.image} />
			<div className={styles.userCardInfo}>
				<div className={styles.userCardInfoPart}>
					<Skeleton className={styles.name} />

					<Skeleton className={styles.job} />
				</div>

				<Skeleton className={styles.city} />
			</div>
		</div>
	);
};
