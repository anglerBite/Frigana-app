import style from './loading.module.css'

const Loading = () => {
    return (
        <div className={style.skeletonContainer}>
            <div className={style.skeletonLine} />
            <div className={style.skeletonLine} />
            <div className={style.skeletonLineShort} />
        </div>
    )
}

export default Loading