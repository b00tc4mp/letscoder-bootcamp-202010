function NoResult (){
    return(
        <div className="not-found">
        <p className="not-found__message">
          No hemos encontrado resultados para tu búsqueda!
        </p>
        <div className="not-found__wrapper">
          <div className="not-found__head">
            <div className="not-found__part p1"></div>
            <div className="not-found__part p2"></div>
            <div className="not-found__part p3"></div>
            <div className="not-found__part p4"></div>
            <div className="not-found__eye esquerdo"></div>
            <div className="not-found__eye direito"></div>
            <div className="boca"></div>
          </div>
          <div className="not-found__body">
            <div className="listra"></div>
          </div>
          <div className="not-found__text t1">
            <p>Iepp!</p>
          </div>
          <div className="not-found__text t2">
            <p>No encontrado</p>
          </div>
          <div className="not-found__text t3">
            <p>Ups!</p>
          </div>
          <div className="not-found__text t4">
            <p>Mal</p>
          </div>
        </div>
      </div>
    );
}