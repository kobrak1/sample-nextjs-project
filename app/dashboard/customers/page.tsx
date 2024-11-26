import Logo from './logo'

export default function Page() {
    return (
        <div>
            <p>This is the customers page</p>
            <Logo title='Customers' className='text-[30px] text-red-400'>
                You can react your customers' transactions here
            </Logo>
        </div>
    )
}