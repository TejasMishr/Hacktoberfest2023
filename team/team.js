function addContributor(imageUrl, contributorName, githubLink) {
    var contributorsContainer = document.getElementById('contributors-container');
    var contributorCard = document.createElement('div'); 
    contributorCard.className = 'card'; //created div class name card
    var imgSection = document.createElement('div');
    imgSection.className = 'img-sec'; //created img section
    var img = document.createElement('img');
    img.src = imageUrl;
    img.height = '150';img.width = '150';
    imgSection.appendChild(img);

    
    
    var infoSection = document.createElement('div');
    infoSection.className = 'info';

    
    //Name append js
    var nameLabel = document.createElement('div');
    nameLabel.className = 'label';
    nameLabel.textContent = contributorName;
    var descLabel = document.createElement('div');
    descLabel.className = 'desc';
    descLabel.textContent = 'Contributor';

    
    //github link url js starts here
    var githubLinkElement = document.createElement('div');
    githubLinkElement.className = 'github';
    var githubLinkAnchor = document.createElement('a');
    githubLinkAnchor.href = githubLink;
    githubLinkAnchor.target = '_blank';//opening in new tab.
    //github logo created below
    var githubIcon = document.createElement('i');
    githubIcon.className = 'fa-brands fa-github fa-2x hero';
    githubLinkAnchor.appendChild(githubIcon);
    githubLinkElement.appendChild(githubLinkAnchor);

    infoSection.appendChild(nameLabel);
    infoSection.appendChild(descLabel);
    infoSection.appendChild(githubLinkElement);

    contributorCard.appendChild(imgSection);
    contributorCard.appendChild(infoSection);

    contributorsContainer.appendChild(contributorCard);


}
var imageUrl = 'https://img.freepik.com/premium-photo/cartoonish-3d-animation-boy-glasses-with-blue-hoodie-orange-shirt_899449-25777.jpg?size=338&ext=jpg&ga=GA1.1.867977485.1696353987&semt=ais';
var contributorName = 'Tejas Mishra';
var githubLink = 'https://github.com/Tejasmishr';
addContributor(imageUrl, contributorName, githubLink);








// --------------------------------------Don't Change Above Code---------------------------


// Format Of Adding Team Names  ----->>>
//Step 1 : call the Function addContributors()
//pass the values your () image url , Your Name , Your github account link )


// -- >  addContributor(Url Of Image, contributor Name (Your Name), github Account Link);

addContributor("https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-02-768x768.png","Anmol Tripathi","https://github.com/AdityaGaur7")
addContributor("data:image/jpeg;base64,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","Aditya Gaur","")
addContributor("https://i.pinimg.com/1200x/2a/6c/fe/2a6cfe0aecf1ba14803f0431ea84a56d.jpg","Prachi Patel","https://github.com/myselfprachi")
addContributor("https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png","Aaradhaya Singh","https://github.com/aaradhayasingh811")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_1280.png","Sarthak","https://github.com/hackbysarthak03")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Meet Thakur","https://github.com/MeetThakur")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Visa Coder","https://www.github.com/codeWithVisa")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Nalukui malimba","https://github.com/nalukui01")
addContributor("https://cdn.pixabay.com/photo/2021/08/17/09/03/girl-6552421_1280.png","Anjali Gupta","#")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Hrishap Joshi","https://github.com/Hrishap")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Md Faizan Khan","https://github.com/thefznkhan")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Saleh Ahmed","https://github.com/SalehAhmed10")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Bishal Roy","https://github.com/R0Y15")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Saurabh Singh","https://github.com/saurabhsingh720")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Mateo Álvarez","https://github.com/drifterDev")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Ankit Goyal","https://github.com/Ankit9126")
addContributor("https://cdn.pixabay.com/photo/2021/08/17/09/03/girl-6552421_1280.png","Varsha Awasthi","#")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png"," Shubham Goyal","https://github.com/ShubhamGoyal7125")
addContributor("https://cdn.pixabay.com/photo/2021/08/17/09/03/girl-6552421_1280.png","Aastha Gupta","https://github.com/motivated-star")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Prakash Mondal","https://github.com/rko0211")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Deepak Maurya","https://github.com/deepakmaur")
addContributor("https://cdn.pixabay.com/photo/2017/01/31/21/23/   avatar-2027365_1280.png","Kartik Labhshetwar","https://github.com/KartikLabhshetwar")