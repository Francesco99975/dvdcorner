
let DVD;
let music;

let x = 0;
let y = 0;

let xs = 0;
let ys = 0;

let r, g, b;

const DVD_width = 128;
const DVD_height = 76;

let angleHits = 0;
let urAngleHits = 0;
let ulAngleHits = 0;
let drAngleHits = 0;
let dlAngleHits = 0;

let container = document.getElementById('AH');
let hits;
let hitsText;

function preload()
{
    DVD = loadImage("res/dvdlogo-02.png");
    music = loadSound("res/Crab_Rave_Short.mp3");
}

function setup()
{
    createCanvas(800, 600);
    hitsText = createP("Corner Hits: ");
    hits = createSpan("0");
    hitsText.parent(container);
    hits.parent(hitsText);
    x = floor(random(width));
    y = floor(random(height));
    xs = 3;
    ys = 3;
    selectColor();
}

function draw()
{
    background(0);
    tint(r, g, b, 250);
    image(DVD, x, y, DVD_width, DVD_height);
    

        if(x == 0 && y == 0)
        {
            angleHits++;
            urAngleHits++;
            console.log("Angle Hits: " + angleHits);
            console.log("UR Angle Hits: " + urAngleHits);
                if(!music.isPlaying())
                    music.play();
        }
        else if((x + DVD_width) == width && y == 0)
        {   
            angleHits++;
            ulAngleHits++;
            console.log("Angle Hits: " + angleHits);
            console.log("UL Angle Hits: " + ulAngleHits);
                if(!music.isPlaying())
                    music.play();
        }
        else if((y + DVD_height) == height && x == 0)
        {
            angleHits++;
            drAngleHits++;
            console.log("Angle Hits: " + angleHits);
            console.log("DR Angle Hits: " + drAngleHits);
                if(!music.isPlaying())
                    music.play();
        }
        else if((x + DVD_width) == width && (y + DVD_height) == height)
        {
            angleHits++;
            dlAngleHits++;
            console.log("Angle Hits: " + angleHits);
            console.log("DL Angle Hits: " + dlAngleHits);
                if(!music.isPlaying())
                    music.play();
        }
        hits.html(angleHits);

        
        x += xs;
        y += ys;
        
        

        if(x + DVD_width >= width)
        {
            xs = -xs;
            x = width - DVD_width;
            selectColor();
            //console.log("x" + x);
        }
        else if(x <= 0)
        {
            xs = -xs;
            x = 0;
            selectColor();
        }

        if(y + DVD_height >= height)
        {
            ys = -ys;
            y = height - DVD_height;
            selectColor();
            //console.log("y" + y);
        }
        else if(y <= 0)
        {
            ys = -ys;
            y = 0;
            selectColor();
        }
}

function selectColor()
{
    r = floor(random(30, 256));
    g = floor(random(30, 256));
    b = floor(random(30, 256));
}