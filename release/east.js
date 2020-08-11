initElements()

function initElements() {
    addWaves()
    initModal()
    window.setTimeout(() => {
        initBottomSheet()
    }, 200)
}

function initBottomSheet() {

    $( "[data-bs-toggle]" ).each((index, element) => {
        $('#' + $(element).attr('data-bs-toggle')).addClass('hidden')
        $('#' + $(element).attr('data-bs-toggle')).addClass('animated')
        $('#' + $(element).attr('data-bs-toggle')).addClass('fadeInUp')
        $('#' + $(element).attr('data-bs-toggle')).addClass('faster')
        element.addEventListener("click", () => {

            toggleBottomSheet($(element).attr('data-bs-toggle')) 

        });
    });
}

function toggleBottomSheet(id) {
    // Enable sheet
    if ($(`#${id}`).hasClass('hidden')) {
        $(`#${id}`).toggleClass('hidden')

        $(`#${id}`).removeClass('fadeOutDown')
        $(`#${id}`).addClass('fadeInUp')

        $('#bottom_sheet_background').removeClass('fadeOut')
        $('#bottom_sheet_background').removeClass('hidden')
        $('#bottom_sheet_background').addClass('fadeIn')

        document.getElementById('bottom_sheet_background').onclick = () => {
            toggleBottomSheet(id)
        }
    }
    else {
        // Disable sheet

        $(`#${id}`).addClass('fadeOutDown')
        $(`#${id}`).removeClass('fadeInUp')

        $('#bottom_sheet_background').removeClass('fadeIn')
        $('#bottom_sheet_background').addClass('fadeOut')

        window.setTimeout(() => {
            $(`#${id}`).toggleClass('hidden')
            $('#bottom_sheet_background').addClass('hidden')
        }, 500)
    }
    
}

function initModal() {
    $('.modal-content').addClass('animated')
    $('.modal-content').addClass('fadeInUp')
    $('.modal-content').addClass('faster')
}

function addWaves() {

    ripplet.defaultOptions.color = 'rgb(255, 255, 255)';
    ripplet.defaultOptions.opacity = 0.3;
    ripplet.defaultOptions.appendTo = 'parent'

    initButtonsContained()

    initButtonsOutlined()

    initButtonsText()
}

function initButtonsText() {

    $('.btn-text-primary').addClass('btn-text')
    $('.btn-text-primary').addClass('btn-primary')
    $('.btn-text-primary').on('pointerdown', ripplet)
    $('.btn-text-primary').attr('data-ripplet', 'color: rgb(98, 0, 238)')
    $('.btn-text-primary').removeClass('btn-text-primary')

    $('.btn-text-secondary').addClass('btn-text')
    $('.btn-text-secondary').addClass('btn-secondary')
    $('.btn-text-secondary').on('pointerdown', ripplet)
    $('.btn-text-secondary').attr('data-ripplet', 'color: rgb(3, 218, 198)')
    $('.btn-text-secondary').removeClass('btn-text-secondary')

    $('.btn-text-danger').addClass('btn-text')
    $('.btn-text-danger').addClass('btn-danger')
    $('.btn-text-danger').on('pointerdown', ripplet)
    $('.btn-text-danger').attr('data-ripplet', 'color: #f44336')
    $('.btn-text-danger').removeClass('btn-text-danger')

    $('.btn-text-info').addClass('btn-text')
    $('.btn-text-info').addClass('btn-info')
    $('.btn-text-info').on('pointerdown', ripplet)
    $('.btn-text-info').attr('data-ripplet', 'color: #2196f3')
    $('.btn-text-info').removeClass('btn-text-info')

    $('.btn-text-success').addClass('btn-text')
    $('.btn-text-success').addClass('btn-success')
    $('.btn-text-success').on('pointerdown', ripplet)
    $('.btn-text-success').attr('data-ripplet', 'color: #4caf50')
    $('.btn-text-success').removeClass('btn-text-success')

    $('.btn-text-warning').addClass('btn-text')
    $('.btn-text-warning').addClass('btn-warning')
    $('.btn-text-warning').on('pointerdown', ripplet)
    $('.btn-text-warning').attr('data-ripplet', 'color: #ff9800')
    $('.btn-text-warning').removeClass('btn-text-warning')

}

function initButtonsOutlined() {

    $('.btn-outlined-primary').addClass('btn-outlined')
    $('.btn-outlined-primary').addClass('btn-primary')
    $('.btn-outlined-primary').on('pointerdown', ripplet)
    $('.btn-outlined-primary').attr('data-ripplet', 'color: rgb(98, 0, 238)')
    $('.btn-outlined-primary').removeClass('btn-outlined-primary')

    $('.btn-outlined-secondary').addClass('btn-outlined')
    $('.btn-outlined-secondary').addClass('btn-secondary')
    $('.btn-outlined-secondary').on('pointerdown', ripplet)
    $('.btn-outlined-secondary').attr('data-ripplet', 'color: rgb(3, 218, 198)')
    $('.btn-outlined-secondary').removeClass('btn-outlined-secondary')

    $('.btn-outlined-danger').addClass('btn-outlined')
    $('.btn-outlined-danger').addClass('btn-danger')
    $('.btn-outlined-danger').on('pointerdown', ripplet)
    $('.btn-outlined-danger').attr('data-ripplet', 'color: #f44336')
    $('.btn-outlined-danger').removeClass('btn-outlined-danger')

    $('.btn-outlined-info').addClass('btn-outlined')
    $('.btn-outlined-info').addClass('btn-info')
    $('.btn-outlined-info').on('pointerdown', ripplet)
    $('.btn-outlined-info').attr('data-ripplet', 'color: #2196f3')
    $('.btn-outlined-info').removeClass('btn-outlined-info')

    $('.btn-outlined-success').addClass('btn-outlined')
    $('.btn-outlined-success').addClass('btn-success')
    $('.btn-outlined-success').on('pointerdown', ripplet)
    $('.btn-outlined-success').attr('data-ripplet', 'color: #4caf50')
    $('.btn-outlined-success').removeClass('btn-outlined-success')

    $('.btn-outlined-warning').addClass('btn-outlined')
    $('.btn-outlined-warning').addClass('btn-warning')
    $('.btn-outlined-warning').on('pointerdown', ripplet)
    $('.btn-outlined-warning').attr('data-ripplet', 'color: #ff9800')
    $('.btn-outlined-warning').removeClass('btn-outlined-warning')

}

function initButtonsContained() {
    $('.btn-contained-primary').addClass('unconfirmed_waves_contained')
    $('.btn-contained-primary').addClass('btn-contained')
    $('.btn-contained-primary').addClass('btn-primary')
    $('.btn-contained-primary').removeClass('btn-contained-primary')

    $('.btn-contained-secondary').addClass('unconfirmed_waves_contained')
    $('.btn-contained-secondary').addClass('btn-contained')
    $('.btn-contained-secondary').addClass('btn-secondary')
    $('.btn-contained-secondary').removeClass('btn-contained-secondary')

    $('.btn-contained-danger').addClass('unconfirmed_waves_contained')
    $('.btn-contained-danger').addClass('btn-contained')
    $('.btn-contained-danger').addClass('btn-danger')
    $('.btn-contained-danger').removeClass('btn-contained-danger')

    $('.btn-contained-info').addClass('unconfirmed_waves_contained')
    $('.btn-contained-info').addClass('btn-contained')
    $('.btn-contained-info').addClass('btn-info')
    $('.btn-contained-info').removeClass('btn-contained-info')

    $('.btn-contained-success').addClass('unconfirmed_waves_contained')
    $('.btn-contained-success').addClass('btn-contained')
    $('.btn-contained-success').addClass('btn-success')
    $('.btn-contained-success').removeClass('btn-contained-success')

    $('.btn-contained-warning').addClass('unconfirmed_waves_contained')
    $('.btn-contained-warning').addClass('btn-contained')
    $('.btn-contained-warning').addClass('btn-warning')
    $('.btn-contained-warning').removeClass('btn-contained-warning')

    $('.unconfirmed_waves_contained').on('mousedown', ripplet)
    $('.unconfirmed_waves_contained').removeClass('unconfirmed_waves_contained')
}

function injectDark() {
    document.getElementById('InjectedTheme').innerHTML = `
    :root {
    --s-b: rgba(18, 18, 18, 1) !important;
    --s-1: rgba(255, 255, 255, 0.02) !important;
    --s-2: #1C1C1C !important;
    --s-3: #202020 !important;
    --s-4: #242424 !important;
    --s-5: #282828 !important;
    --s-6: #2C2C2C !important;
    --s-7: #303030 !important;
    --s-8: #343434 !important;

    --primary: #BB86FC !important;
    --primary-hover: #c99dff !important;
    --primary-hover-variant: rgb(201, 157, 255, 0.05) !important;
    --primary-hover-variant-variant: rgb(201, 157, 255, 0.1) !important;
    --primary-variant: #18e6d1 !important;
    --secondary: #03DAC6 !important;
    --secondary-hover: #18e6d1 !important;
    --secondary-hover-variant: rgb(24, 230, 209, 0.05) !important;
    --secondary-hover-variant-variant: rgb(24, 230, 209, 0.1) !important;
    --secondary-variant: #018786 !important;

    --e-0: rgba(255, 255, 255, 1.0) !important;
    --e-1: rgba(255, 255, 255, 0.87) !important;
    --e-2: rgba(255, 255, 255, 0.6) !important;
    --e-3: rgba(255, 255, 255, 0.38) !important;
    --e-4: rgba(255, 255, 255, 0.11) !important;

    --c-1: rgba(255, 255, 255, 0.02) !important;
    --c-2: rgba(255, 255, 255, 0.04) !important;
    --c-3: rgba(255, 255, 255, 0.06) !important;
    }`
}

function injectLight() {
    document.getElementById('InjectedTheme').innerHTML = `
    :root {
    --s-b: rgb(255, 255, 255) !important;
    --s-1: rgba(255, 255, 255, 1.00) !important;
    --s-2: rgba(255, 255, 255, 1.00) !important;
    --s-3: rgba(255, 255, 255, 1.00) !important;
    --s-4: rgba(255, 255, 255, 1.00) !important;
    --s-5: rgba(255, 255, 255, 1.00) !important;
    --s-6: rgba(255, 255, 255, 1.00) !important;
    --s-7: rgba(255, 255, 255, 1.00) !important;
    --s-8: rgba(255, 255, 255, 1.00) !important;

    --primary: rgb(98, 0, 238) !important;
    --primary-hover: #7517fa !important;
    --primary-hover-variant: rgb(117, 23, 250, 0.05) !important;
    --primary-hover-variant-variant: rgb(117, 23, 250, 0.1) !important;
    --primary-variant: #3700B3 !important;
    --secondary: rgb(3, 218, 198) !important;
    --secondary-hover: #18e6d1 !important;
    --secondary-hover-variant: rgb(24, 230, 209, 0.05) !important;
    --secondary-hover-variant-variant: rgb(24, 230, 209, 0.1) !important;
    --secondary-variant: #018786 !important; 
    
    --e-0: rgba(0, 0, 0, 1.0) !important;
    --e-1: rgba(0, 0, 0, 0.87) !important;
    --e-2: rgba(0, 0, 0, 0.60) !important;
    --e-3: rgba(0, 0, 0, 0.38) !important;
    --e-4: rgba(0, 0, 0, 0.11) !important;

    --c-1: rgba(0, 0, 0, 0.02) !important;
    --c-2: rgba(0, 0, 0, 0.04) !important;
    --c-3: rgba(0, 0, 0, 0.06) !important;
    }`
}

function toggleloader() {
    $('#eonloaderelement').modal('toggle')
}

function showcomplete(num) {
    if (num == null || num == undefined) {
        num = 1000
    }
    $('#doneleementicon').css('display', 'none')
    $('#eondoneelement').modal('toggle')   
    window.setTimeout(() => {
        $('#doneleementicon').css('display', 'block')
    }, 100)
    window.setTimeout(() => {
        $('#eondoneelement').modal('toggle')   
    }, num)
}

function error(text) {
    $('#erorrModalMsg').html(text)
    $('#errorModal').modal('toggle')
}