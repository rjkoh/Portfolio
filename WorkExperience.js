let display = "1";

const GMC = '<p class="font-bold sm:text-xl mb-2">Mar 2021 - Jul 2021</p><p class="font-bold sm:text-lg mb-2">Operations and Admin Assistant</p><ul class="list-disc pl-5 sm:text-base text-sm"><li>Liasing with vendors and customers through phone and email</li><li>Ad-hoc support such as taking minutes, MS Office troubleshooting</li><li>Managed projects such as renovations, involving meeting arrangements, planning and liasing</li></ul>';

const SAF = '<p class="font-bold sm:text-xl mb-2">Apr 2019 - Feb 2021</p><p class="font-bold sm:text-lg mb-2">Battery Commander, 23rd Singapore Artillery</p><ul class="list-disc pl-5 sm:text-base text-sm"><li>Awarded top 30% in Officer Cadet School</li><li>Commanded a company of 100 men and served as bridge between Regular officers and NSF company</li><li>Planned a battalion-wide anniversary activity involving almost 500 people</li></ul>';

const details = [
    SAF,
    GMC
];

const buttons = [
    "saf",
    "gmc"
];

function updateWorkExperienceContent(index) {
    console.assert(index < details.length, "Index out of bounds!");

    if (index == display) {
        return;
    }

    document.getElementById("workExperienceDetails").innerHTML = details[index];
    display = index;
    
    for (i = 0; i < buttons.length; i++) {
        if (i == index) {
            const button = document.getElementById(buttons[i]);
            button.style.background = 'rgb(64 64 64)';
            continue;
        }

        const button = document.getElementById(buttons[i]);
        button.style.background = 'inherit';
    }
}
