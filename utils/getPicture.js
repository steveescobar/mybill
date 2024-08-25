import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';

const getPicture = async (
    setPreview,
    setIsPreview,
    screenshotRef,
    setIsLoading,
    toast,
    marginTopPercent,
    marginRightPercent,
    marginBottomPercent,
    marginLeftPercent,
) => {
    setIsLoading(true);
    try {
        const canvas = await html2canvas(screenshotRef.current, {
            scale: window.devicePixelRatio,
            useCORS: true,
            allowTaint: true,
            letterRendering: true,
            onrendered: function (canvas) {
                var ctx = canvas.getContext('2d');
                ctx.webkitImageSmoothingEnabled = false;
                ctx.mozImageSmoothingEnabled = false;
                ctx.imageSmoothingEnabled = false;
            },
        });

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Define the clipping margins for each side
        const marginTop = (marginTopPercent / 100) * canvasHeight;
        const marginRight = (marginRightPercent / 100) * canvasWidth;
        const marginBottom = (marginBottomPercent / 100) * canvasHeight;
        const marginLeft = (marginLeftPercent / 100) * canvasWidth;

        const croppedWidth = canvas.width - marginLeft - marginRight;
        const croppedHeight = canvas.height - marginTop - marginBottom;

        const dataURL = canvas.toDataURL('image/png');
        const img = new Image();
        img.src = dataURL;

        img.onload = () => {
            const croppedCanvas = document.createElement("canvas");
            croppedCanvas.width = croppedWidth;
            croppedCanvas.height = croppedHeight;

            const context = croppedCanvas.getContext("2d");

            // Draw the cropped area of the image
            context.drawImage(
                img,
                marginLeft, marginTop, croppedWidth, croppedHeight, // Source rectangle
                0, 0, croppedWidth, croppedHeight // Destination rectangle
            );

            croppedCanvas.toBlob((blob) => {
                const clipboardItem = new ClipboardItem({ [blob.type]: blob });
                write([clipboardItem]).then(() => {

                    toast.success("Copied successfully");
                    setIsLoading(false);
                    setPreview(croppedCanvas.toDataURL('image/png'));
                    setIsPreview(true);

                }).catch((error) => {
                    toast.error("Something went wrong. Please try again!");
                    setIsLoading(false);
                    setIsPreview(false);
                    console.error("Error copying image:", error);
                });
            }, img.type);
        };
    } catch (error) {
        console.error('Error taking screenshot:', error);
        setIsLoading(false);
    }
};

export default getPicture;