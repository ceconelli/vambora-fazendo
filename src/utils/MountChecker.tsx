import React from 'react'

const MountChecker = () => {
    const [didMount,setDidMount] = React.useState(false);
    React.useEffect(() => {
        setDidMount(true)
    }, [])
    return didMount
}


export default MountChecker
