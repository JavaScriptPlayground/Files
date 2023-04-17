/**
 * This function provides a way to download blob files from the browser.
 * @param {Blob} data File blob object
 * @param {string} filename Name of the file to download
 * @returns {void}
 */
export function fileDownload(data = new Blob(), filename = '') {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = filename;
    link.click()
}
