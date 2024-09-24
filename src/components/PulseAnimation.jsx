function Pulse() {
    return (
        <div className='relative w-6 h-6'>
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse'></div>
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-6 h-6 rounded-full bg-green-900  animate-pulse'></div>
            </div>
        </div>
    )
}

export default Pulse;