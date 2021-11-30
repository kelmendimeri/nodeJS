const postValidator = (postInfo) => {
    if (!postInfo.title ) {
      const title = "missing title";
      return [title, false]; 
      }
      else if(!postInfo.content){
        const content = "missing title";
        return [content, false];
      }else{
    return true;
  }
}



module.exports = {postValidator};