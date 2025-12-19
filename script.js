/**
 * Force Delete Automator
 * Finds and clicks all buttons containing "Force Delete" on the current page.
 */
(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const targetText = 'Force Delete';
    
    const deleteButtons = buttons.filter(btn => 
        btn.textContent.trim().toLowerCase() === targetText.toLowerCase() ||
        btn.innerText.includes(targetText)
    );

    if (deleteButtons.length === 0) {
        console.log("No 'Force Delete' buttons found.");
        return;
    }

    console.log(`Found ${deleteButtons.length} buttons. Starting batch deletion...`);

    deleteButtons.forEach((btn, index) => {
        setTimeout(() => {
            btn.click();
            console.log(`[${index + 1}/${deleteButtons.length}] Clicked.`);
        }, index * 100); // 100ms stagger to avoid browser lag
    });
})();
