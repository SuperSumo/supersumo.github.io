if (document.images)
{
	news_normal = new Image();
	news_normal.src = "images/nav_news.gif";
	news_over = new Image();
	news_over.src = "images/nav_news2.gif";

	sprites_normal = new Image();
	sprites_normal.src = "images/nav_sprites.gif";
	sprites_over = new Image();
	sprites_over.src = "images/nav_sprites2.gif";

	models_normal = new Image();
	models_normal.src = "images/nav_models.gif";
	models_over = new Image();
	models_over.src = "images/nav_models2.gif";

	maps_normal = new Image();
	maps_normal.src = "images/nav_maps.gif";
	maps_over = new Image();
	maps_over.src = "images/nav_maps2.gif";

	misc_normal = new Image();
	misc_normal.src = "images/nav_misc.gif";
	misc_over = new Image();
	misc_over.src = "images/nav_misc2.gif";

	links_normal = new Image();
	links_normal.src = "images/nav_links.gif";
	links_over = new Image();
	links_over.src = "images/nav_links2.gif";
}

function imgSwap(Name)
{
	document.images[Name].src = eval(Name+"_over.src");
}

function restoreImage(Name)
{
	document[Name].src = eval(Name+"_normal.src");
}

function NewWindow(mypage, myname, w, h)
{
	var winl = (screen.width - w) / 2;
	var wint = 0;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',toolbar=0';
	win = window.open(mypage, myname, winprops);
}

function shake(how_long)
{
	if (window.moveBy)
	{
		for (i = how_long; i > 0; i--)
		{
			self.moveBy(0,i);
			self.moveBy(i,0);
			self.moveBy(0,-i);
			self.moveBy(-i,0);
        	}
    	}
}

function toggle(poop)
{
	if (poop.style.display == "none")
	{
		poop.style.display = "";
	}
	else
	{
		poop.style.display = "none";
	}
}