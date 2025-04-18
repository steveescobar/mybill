import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';

const getPicture = async (
    setPreview,
    setIsPreview,
    screenshotRef,
    setIsLoading,
    toast,
    marginTopPercent = 0,
    marginRightPercent = 0,
    marginBottomPercent = 0,
    marginLeftPercent = 0
) => {
    setIsLoading(true);

    try {
        const element = screenshotRef.current;
        if (!element) {
            toast.error("Element not found.");
            setIsLoading(false);
            return;
        }

        await new Promise(res => setTimeout(res, 150)); // Let layout settle

        const scale = 6; // Ultra high-res
        const canvas = await html2canvas(element, {
            scale,
            useCORS: true,
            backgroundColor: null,
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight
        });

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const marginTop = (marginTopPercent / 100) * canvasHeight;
        const marginRight = (marginRightPercent / 100) * canvasWidth;
        const marginBottom = (marginBottomPercent / 100) * canvasHeight;
        const marginLeft = (marginLeftPercent / 100) * canvasWidth;

        const croppedWidth = canvasWidth - marginLeft - marginRight;
        const croppedHeight = canvasHeight - marginTop - marginBottom;

        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = croppedWidth;
        croppedCanvas.height = croppedHeight;

        const ctx = croppedCanvas.getContext('2d', { alpha: true });
        ctx.imageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;

        ctx.drawImage(
            canvas,
            marginLeft, marginTop, croppedWidth, croppedHeight,
            0, 0, croppedWidth, croppedHeight
        );

        // Convert to PNG blob
        croppedCanvas.toBlob((blob) => {
            if (!blob) {
                toast.error("Image conversion failed.");
                setIsLoading(false);
                return;
            }

            // Copy to clipboard
            const clipboardItem = new ClipboardItem({ [blob.type]: blob });
            write([clipboardItem])
                .then(() => {
                    // Download image as well
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "screenshot.png";
                    a.click();
                    URL.revokeObjectURL(url);

                    setPreview(croppedCanvas.toDataURL('image/png'));
                    setIsPreview(true);
                    toast.success("📋 Copied + ⬇️ Downloaded successfully");
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Clipboard error:", error);
                    toast.error("Failed to copy image.");
                    setIsLoading(false);
                });
        }, 'image/png');

    } catch (error) {
        console.error("Screenshot error:", error);
        toast.error("Something went wrong.");
        setIsLoading(false);
    }
};

export default getPicture;
