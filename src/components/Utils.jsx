// The utilities class

const Utils = {
    // Function to return API key
    apiKey: function () {
        let hash = 'OTk0OTczYzRjM2Y5MWU3NTFmMDVkZDY1MDUxMGZkMWQ=';
        return atob(hash);
    }
}

export default Utils;