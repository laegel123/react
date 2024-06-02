export default function App() {

    return (
        <Toolbar 
            onPlayMovie={() => console.log('playMovie')}
            onUploadImage={() => console.log('uploadImage')}
        />
    );
}


function Toolbar({onPlayMovie, onUploadImage}) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}

function Button({onClick, children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );

}
