/**
 * A React functional component that renders a video element.
 *
 * @function Video
 * @returns {JSX.Element} - A JSX element representing the video component.
 */
export default function Video() {
    return (
        <div className="flex justify-center mx-12">
            <video className="h-auto w-full sm:w-1/2 md:w-1/3 rounded-lg m-auto" controls>
                <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};