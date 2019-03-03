export default {
    methods: {
        validateForm(formId, errorObjectName = null) {
            var nodes = document.querySelectorAll(`#${formId} :invalid`);
            var vm = this; //current vue instance;
        
            Object.keys(this[errorObjectName]).forEach(key => {
                this[errorObjectName][key] = null
            });
        
            if (nodes.length > 0) {
                nodes.forEach(node => {
                    if (node.title) {
                        this[errorObjectName][node.name] = node.title;
                    }
                    else {
                        this[errorObjectName][node.name] = node.validationMessage;
                    }
        
                    node.addEventListener('change', function (e) {
                        vm.validateForm(formId, errorObjectName);
                    });
                });
        
                return false;
            }
            else {
                return true;
            }
        },
        convertToBase64(event) {
            var file = event.currentTarget.files[0];
            return new Promise((resolve, reject) => {
                if (event.currentTarget.files.length > 0) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve({
                        type: reader.result.split(',')[0],
                        file: reader.result.split(',')[1],
                        file_name: file.name
                    });
                    reader.onerror = error => reject(error);
                }
            });
        },
        getTimeUnits(units) {
            let timeUnits = [
                { name: 'hour', value: 1 },
                { name: 'day', value: 24 },
                { name: 'week', value: (24 * 7) },
                { name: 'year', value: (24 * 365.25) }
            ]

            return timeUnits.filter(timeUnit => {
                return units.includes(timeUnit.name)
            })
        }
    }
}