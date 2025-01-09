

import fs from 'fs';
import path from 'path';


export default function RenderHtmlPage() {





    // Read the HTML file
    const filePath = path.join(process.cwd(), 'public', 'hom.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}
