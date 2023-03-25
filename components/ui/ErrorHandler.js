

const ErrorHandler = (props) => {
  return (
    <div className="min-h-screen mx-auto p-4 flex justify-center  ">
        <div className="h-fit w-fit px-20 py-8 text-fuchsia-800 bg-fuchsia-300 text-xl rounded-xl">
            <h1>{props.children}</h1>
        </div>
    </div>
  )
}

export default ErrorHandler