export const Work: React.FC = () => {
    const electron = (window as any).electron
    return <div>
        work <br/>
        The home dir is @ {electron.homeDir()}
        </div>
}