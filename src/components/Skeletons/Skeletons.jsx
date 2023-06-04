import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './Skeletons.module.scss';
import receipeStyles from '../Recipes/recipe.module.scss';
const TodayRecipeSkeleton = ()=>{
    return(
        <>
            <div className={`${styles.card}`}>               
                <div className={`${styles.content_area} `}>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                </div>
            </div>
            <div className={`${styles.card}`}>               
                <div className={`${styles.content_area} `}>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                </div>
            </div>
            <div className={`${styles.card}`}>               
                <div className={`${styles.content_area} `}>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#b5b3b3" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading2} />
                    </SkeletonTheme>
                </div>
            </div>
        </>
    )
}



export {TodayRecipeSkeleton}