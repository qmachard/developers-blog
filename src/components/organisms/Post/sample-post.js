export default `<article class="post">
    <h1 id="concevoir-une-api-rest">Concevoir une API REST</h1>

    <p>Pour communiquer entre elles, les applications ont besoin d’un support <strong>basé généralement sur HTTP</strong>. C’est une qu’on appelle <strong>une API</strong> ou <strong>un webservice</strong>.</p>

    <p>C’est en 2000 que Roy Fielding crée le <strong>standard REST</strong> afin de <strong>normaliser de manière simple ces API</strong> et d’utiliser au maximum le standard HTTP. Cette norme est basée sur 4 niveaux souvent appelés “<a href="https://martinfowler.com/articles/richardsonMaturityModel.html" rel="nofollow" target="_blank" class="external-link">Glory of REST</a>”.</p>

    <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum
            <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, obcaecati!</li>
                    </ul>
                </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, obcaecati!</li>
            </ul>
        </li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, obcaecati!</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae exercitationem facere maiores non quaerat quo sed temporibus ullam unde vero.</li>
        <li>Lorem ipsum</li>
    </ul>

    <p>Voyons comment cela se présente.</p>

    <p><img src="https://media.giphy.com/media/JUh0yTz4h931K/giphy.gif" alt="GIF: Détective regardant avec une loupe"></p>

    <h2 id="les-ressources">Les ressources</h2>

    <p>Une API sert avant tout à <strong>exécuter des actions sur des ressources</strong> métiers. Il faut donc dans un premier temps <strong>définir ces ressources</strong>.</p>

    <blockquote>
        <p>Par exemple, si je veux créer une API permettant de gérer une bibliothèque musicale. Mes ressources seront donc : les albums, les artistes et les pistes.</p>
    </blockquote>

    <p>Les ressources <strong>se présentent sous la forme d’un objet JSON</strong> et se découpent en plusieurs catégories : les <strong>entités</strong> et les <strong>collections</strong>.</p>

    <h3 id="entité-">Entité 📕</h3>

    <p>Une entité est la <strong>représentation la plus simple d’une ressource</strong>. Elle permet simplement d’en afficher les détails.</p>

    <blockquote>
        <p>Voici un exemple de représentation de mon entité “album”</p>
        <div class="language-json highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code><span class="p">{</span><span class="w">
  </span><span class="s2">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">7291</span><span class="p">,</span><span class="w">
  </span><span class="s2">"title"</span><span class="p">:</span><span class="w"> </span><span class="s2">"The Groove Sessions"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"year"</span><span class="p">:</span><span class="w"> </span><span class="mi">2007</span><span class="p">,</span><span class="w">
  </span><span class="s2">"artwork"</span><span class="p">:</span><span class="w"> </span><span class="s2">"/path/to/artwork.jpeg"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"artists"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
    </span><span class="p">{</span><span class="w">
      </span><span class="s2">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">4523</span><span class="p">,</span><span class="w">
      </span><span class="s2">"name"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Chinese Man"</span><span class="w">
    </span><span class="p">}</span><span class="w">
  </span><span class="p">]</span><span class="w">
</span><span class="p">}</span><span class="w">
</span></code></pre></div>  </div>
    </blockquote>

    <h3 id="collections-">Collections 📚</h3>

    <p>Une collection est <strong>une liste d’entités</strong>.</p>

    <blockquote>
        <p>Exemple de la liste de mes albums</p>
        <div class="language-json highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code><span class="p">{</span><span class="w">
  </span><span class="s2">"items"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
    </span><span class="p">{</span><span class="w">
      </span><span class="s2">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">7291</span><span class="p">,</span><span class="w">
      </span><span class="s2">"title"</span><span class="p">:</span><span class="w"> </span><span class="s2">"The Groove Sessions"</span><span class="w">
    </span><span class="p">},</span><span class="w">
    </span><span class="p">{</span><span class="w">
      </span><span class="s2">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">7745</span><span class="p">,</span><span class="w">
      </span><span class="s2">"title"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Epoch"</span><span class="w">
    </span><span class="p">},</span><span class="w">
    </span><span class="err">...</span><span class="w">
  </span><span class="p">],</span><span class="w">
  </span><span class="s2">"count"</span><span class="p">:</span><span class="w"> </span><span class="mi">10</span><span class="p">,</span><span class="w">
  </span><span class="s2">"limit"</span><span class="p">:</span><span class="w"> </span><span class="mi">10</span><span class="p">,</span><span class="w">
  </span><span class="s2">"total"</span><span class="p">:</span><span class="w"> </span><span class="mi">26</span><span class="w">
</span><span class="p">}</span><span class="w">
</span></code></pre></div>  </div>
    </blockquote>

    <p>Comme on peut le voir dans l’exemple, l’avantage de retourner un objet et non directement une liste est la possibilité d’ajouter la pagination de notre liste ou des éléments associés à celle-ci.</p>

    <h3 id="erreurs-">Erreurs ❌</h3>

    <p>Une erreur n’est pas vraiment une ressource réelle, mais elle a tout de même un schéma qui est intéressant à travailler.</p>

    <p><img src="/img/posts/rest/error.png" alt="- Developpeur : &quot;Mais putain&quot;, - API: &quot;Unknown error. Please try again&quot;"></p>

    <p>Comme le montre cette vignette de <a href="http://www.commitstrip.com/fr/2013/07/01/quand-lapi-rend-fou/" rel="nofollow" target="_blank" class="external-link">CommitStrip.com</a>, il est toujours frustrant pour un développeur de ne pas comprendre l’erreur renvoyée par le webservice. Il est donc nécessaire de renvoyer une erreur correctement formatée.</p>

    <blockquote>
        <p>Voyons un exemple d’erreur</p>
        <div class="language-json highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code><span class="p">{</span><span class="w">
  </span><span class="s2">"message"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Album not found"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"status"</span><span class="p">:</span><span class="w"> </span><span class="mi">404</span><span class="p">,</span><span class="w">
  </span><span class="s2">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"not_found"</span><span class="w">
</span><span class="p">}</span><span class="w">
</span></code></pre></div>  </div>
    </blockquote>

    <h2 id="les-uri">Les URI</h2>

    <blockquote>
        <p>“Un <strong>URI</strong>, de l’anglais <em>Uniform Resource Identifier</em>, soit littéralement <em>identifiant uniforme de ressource</em>, est une courte chaîne de caractères identifiant une ressource sur un réseau.”
            – <cite><a href="https://fr.wikipedia.org/wiki/Uniform_Resource_Identifier" rel="nofollow" target="_blank" class="external-link">URI, Wikipedia</a></cite></p>
    </blockquote>

    <h3 id="uri--ressource">URI = Ressource</h3>

    <p>Il est important de garder une règle en tête : “<strong>Chaque URI correspond à une ressource de notre système et non à une action</strong>”.</p>

    <h4 id="collection">Collection</h4>

    <p>L’URI associé à une liste d’entités (une collection, donc) se présente sous la forme <code class="highlighter-rouge">/entities</code> (avec un <em>s</em> pour mettre en avant la pluralité des entités).</p>

    <blockquote>
        <p>L’URI correspondant à ma collection d’albums sera donc <code class="highlighter-rouge">/albums</code>.</p>
    </blockquote>

    <h4 id="entité">Entité</h4>

    <p>Pour requêter une entité il faut garder en tête cette phrase : “je requête une entité de ma collection”, ainsi, l’URI tombe sous le sens et sera <code class="highlighter-rouge">/entities/{entity-id}</code> (on récupère un item de la collection, celle-ci garde donc son <em>s</em> pour rester cohérente).</p>

    <blockquote>
        <p>L’URI correspondant à un album sera <code class="highlighter-rouge">/albums/{album-id}</code></p>
    </blockquote>

    <h4 id="le-cas-des-sous-ressources">Le cas des sous-ressources</h4>

    <p>Dans certains cas, une ressource est dépendante d’une autre, c’est ce que l’on appelle une <strong>sous-ressource</strong>.</p>

    <p>L’URI correspondante à une collection de sous-ressources sera <code class="highlighter-rouge">/entities/{entity-id}/sub-resources</code> et pour récupérer une entité <code class="highlighter-rouge">/entities/{entity-id}/sub-resources/{sub-resource-id}</code>.</p>

    <blockquote>
        <p>Dans l’exemple, on peut se dire que les titres seront les enfants d’un album. On pourra donc avoir ces URI :</p>

        <ul>
            <li>Collection de pistes d’un album : <code class="highlighter-rouge">/albums/{album-id}/tracks</code>
            </li>
            <li>Piste (d’une collection de pistes) d’un album : <code class="highlighter-rouge">/albums/{album-id}/tracks/{track-id}</code>
            </li>
        </ul>
    </blockquote>

    <h3 id="utilisation-des-paramètres-de-requête">Utilisation des paramètres de requête</h3>

    <p>Les paramètres de requête (appelés QueryParams) sont des <strong>paramètres optionnels</strong> qui s’ajoutent à la fin de mon URL.</p>

    <h4 id="rechercher">Rechercher</h4>

    <p>Comme Google, on peut utiliser un paramètre <code class="highlighter-rouge">q</code> pour <strong>faire une recherche sur une collection</strong>.</p>

    <blockquote>
        <p>Pour rechercher les albums on peut faire quelque chose comme <code class="highlighter-rouge">/albums?q=Dyna-Mite</code></p>
    </blockquote>

    <h4 id="filtrer">Filtrer</h4>

    <p>Les paramètres permettent également de <strong>filtrer les éléments d’une collection</strong>. On utilisera généralement l’attribut de la ressource comme clé.</p>

    <blockquote>
        <p>Pour lister les albums d’une année spécifique on peut prévoir un URI comme <code class="highlighter-rouge">/albums?year=2007</code></p>
    </blockquote>

    <h4 id="pagination">Pagination</h4>

    <p>On peut paginer simplement une collection comme on le ferait sur un site standard en ajoutant deux paramètres <code class="highlighter-rouge">page</code> permettant d’afficher une page et <code class="highlighter-rouge">limit</code> permettant de spécifier le nombre d’items par page.</p>

    <blockquote>
        <p>Pour paginer mes albums par pas de 10 et sélectionner la deuxième page, je ferais certainement quelque chose comme <code class="highlighter-rouge">/albums?page=2&amp;limit=10</code></p>
    </blockquote>

    <p>Il y a d’autres types de pagination, par exemple on peut paginer par gamme et prévoir un paramètre de type <code class="highlighter-rouge">range=0-10</code>, etc.</p>

    <p>En bref, on peut faire ce que l’on veut 🎉.</p>

    <h4 id="tri">Tri</h4>

    <p>Afin de trier une collection, les query params sont la solution par excellence. Il suffit d’ajouter un paramètre <code class="highlighter-rouge">sort</code> et le tour est jouer.</p>

    <p><em>Tips: Afin de choisir dans quel ordre trier mes éléments, j’ajoute un <code class="highlighter-rouge">-</code> quand il s’agit d’un ordre décroissant.</em></p>

    <blockquote>
        <p>Pour trier les albums par années décroissantes mon URI sera <code class="highlighter-rouge">/albums?sort=-year</code>.</p>
    </blockquote>

    <h4 id="format">Format</h4>

    <p>Une API doit pouvoir s’adapter aux besoins des clients (applications, services, etc.). On peut donc leur laisser la main sur les données dont ils ont besoin et ainsi optimiser le poids des requêtes. Ainsi, on ajoute un paramètre <code class="highlighter-rouge">fields</code> pour <strong>lister les champs à remonter</strong> lors de l’appel.</p>

    <blockquote>
        <p>Si on veut lister les albums en affichant seulement leur titre, l’URI sera <code class="highlighter-rouge">/albums?fields=title</code></p>
    </blockquote>

    <h2 id="les-verbes-http">Les verbes HTTP</h2>

    <p>La plupart du temps, un API sert à afficher, créer, modifier et supprimer des entités de notre application, c’est ce qu’on appelle un <strong>CRUD</strong>.</p>

    <blockquote>
        <p>“L’acronyme informatique anglais <strong>CRUD</strong> (pour <em>create</em>, <em>read</em>, <em>update</em>, <em>delete</em>) […] désigne les quatre opérations de base pour la persistance des données.”<br>
            – <cite><a href="https://fr.wikipedia.org/wiki/CRUD" rel="nofollow" target="_blank" class="external-link">CRUD, Wikipedia</a></cite></p>
    </blockquote>

    <h3 id="crud">CRUD</h3>

    <p>Pour ce faire, nous allons utiliser <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/M%C3%A9thode" rel="nofollow" target="_blank" class="external-link"><strong>les verbes que met HTTP à notre disposition</strong></a>, c’est-à-dire <strong>GET</strong>, <strong>POST</strong>, <strong>PATCH</strong>, <strong>PUT</strong> et <strong>DELETE</strong>.</p>

    <p><img src="https://media.giphy.com/media/dUMyRVhUMmD1m/giphy.gif" alt=""></p>

    <p>Voici un petit tableau permettant de comprendre le rôle de chaque verbe lorsqu’il est exécuté sur une entité ou une collection.</p>

    <table>
        <thead>
        <tr>
            <th>Verbe</th>
            <th>Collection</th>
            <th>Entité</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>GET</td>
            <td>Liste les entités</td>
            <td>Affiche le détail d’une entité</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>Créer une entité</td>
            <td>-</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>-</td>
            <td>Modifie l’entité</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>-</td>
            <td>Supprime l’entité</td>
        </tr>
        </tbody>
    </table>

    <blockquote>
        <p>Reprenons notre collection musicale. Voici la liste des actions disponibles pour notre ressource “Albums” :</p>

        <ul>
            <li>
                <code class="highlighter-rouge">GET /albums</code> : Récupère la liste des albums</li>
            <li>
                <code class="highlighter-rouge">POST /albums</code> : Ajoute un album à notre collection</li>
            <li>
                <code class="highlighter-rouge">GET /albums/{album}</code> : Affiche le détail de l’album</li>
            <li>
                <code class="highlighter-rouge">PATCH /albums/{album}</code> : Modifie l’album</li>
            <li>
                <code class="highlighter-rouge">DELETE /albums/{album}</code> : Supprime l’album</li>
        </ul>
    </blockquote>

    <h4 id="idempotence">Idempotence</h4>

    <p>L’idempotence est le fait que lorsqu’une requête est appelée plusieurs fois, le résultat obtenu ne varie pas.</p>

    <p>Les verbes <code class="highlighter-rouge">GET</code>, <code class="highlighter-rouge">PUT</code>, <code class="highlighter-rouge">PATCH</code>, <code class="highlighter-rouge">DELETE</code> sont idempotents. Seul <code class="highlighter-rouge">POST</code> ne l’est pas, car il crée une entité à chaque appel.</p>

    <p>cf. <a href="https://restfulapi.net/idempotent-rest-apis/" rel="nofollow" target="_blank" class="external-link">Idempotent REST API</a></p>

    <h4 id="patch-ton-post">
        <em>PATCH</em> ton <em>POST</em>
    </h4>

    <p>Ces deux verbes HTTP permettent d’ajouter un corps (<em>content</em>) à notre requête. Ce corps sera également un object JSON et représentera les attributs d’entrée de l’objet (ceux utiles à sa création).</p>

    <blockquote>
        <p>Si nous voulons créer un nouvel album, nous exécuterons cette requête :</p>

        <div class="language-markdown highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code><span class="gh"># POST /albums</span>
<span class="p">+</span> Request (application/json)
{
    "title": "Lunar Lane",
    "year": "2015"
}
<span class="p">
+</span> Response 201 (application/json)
{
    "id": 274,
    "title": "Lunar Lane",
    "year": "2015"
}
</code></pre></div>  </div>

        <p>Et pour modifier cet album</p>
        <div class="language-markdown highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code><span class="gh"># PATCH /albums/274</span>
<span class="p">+</span> Request (application/json)
{
    "title": "Lunar Lane (Deluxe)",
    "year": "2015"
}
<span class="p">
+</span> Response 200 (application/json)
{
    "id": 274,
    "title": "Lunar Lane (Deluxe)",
    "year": "2015"
}
</code></pre></div>  </div>
    </blockquote>

    <h3 id="le-cas-des-ressources-liées">Le cas des ressources liées</h3>

    <p>Afin de lier deux ressources entre elles sans définir pour autant de lien de parenté j’utilise le verbe <code class="highlighter-rouge">PUT</code>.</p>

    <blockquote>
        <p>Les artistes possèdent plusieurs albums, on va donc lier un artiste à un album (ce choix est arbitraire) :</p>

        <ul>
            <li>
                <code class="highlighter-rouge">GET /artists/{artist}/albums</code> : Liste les albums liés à un artiste</li>
            <li>
                <code class="highlighter-rouge">PUT /artists/{artist}/albums/{album}</code> : Lie l’album à l’artiste</li>
            <li>
                <code class="highlighter-rouge">DELETE /artists/{artist}/albums/{album}</code> : Supprime uniquement la liaison entre l’album et l’artiste</li>
        </ul>
    </blockquote>

    <h3 id="actions-particulières">Actions particulières</h3>

    <p>Bien sûr <strong>certaines actions ne se résument pas aux simples CRUD</strong>. Dans ce cas, il est nécessaire de faire un <strong>URI particulier en y ajoutant un verbe</strong>.</p>

    <p><img src="https://media.giphy.com/media/SqmkZ5IdwzTP2/giphy.gif" alt="WHAT?!?"></p>

    <p>Oui, au début de mon article je vous ai dit “pas de verbes”, mais ces actions sont <strong>l’exception qui confirme la règle</strong>.</p>

    <p>Bien sûr, il faut avant tout essayer de faire rentrer cette action dans un des verbes HTTP. Cette nouvelle URL sera <strong>forcément appelée en POST</strong>.</p>

    <blockquote>
        <p>Par exemple, si je veux lire une piste d’un album, je n’ai pas de verbe HTTP qui correspondrait… Je vais donc <strong>exceptionnellement</strong> créer cette action :</p>

        <div class="highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code>POST /albums/{album-id}/tracks/{track-id}/play
</code></pre></div>  </div>
    </blockquote>

    <h2 id="les-status-code">Les “status code”</h2>

    <p><img src="https://www.commitstrip.com/wp-content/uploads/2018/08/Strip-Response-code-650-final.jpg" alt=""></p>

    <p>Comme le montre très bien cette planche de l’excellent <a href="http://www.commitstrip.com/fr/2018/08/24/http-headers-ftw/" rel="nofollow" target="_blank" class="external-link">CommitStrip.com</a>, en plus de retourner un <a href="#erreurs-">format d’erreur</a> correct il est important d’<strong>utiliser les status codes correspondants</strong>.</p>

    <blockquote>
        <p>Un des <em>status code</em> le plus connu est 404, que l’on croise régulièrement, mais qu’en est-il des <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes" rel="nofollow" target="_blank" class="external-link">autres</a> ?</p>
    </blockquote>

    <p>L’idée n’est pas de vous lister un à un l’intégralité des <em>status codes</em>, mais de vous montrer les plus utilisés et les plus subtiles.</p>

    <p>Ceux-ci ce découpent en 4 catégories : <strong>1xx</strong>, <strong>2xx</strong>, <strong>3xx</strong>, <strong>4xx</strong> et <strong>5xx</strong>. <em>On ne va pas parler des erreurs de type 1xx, qui n’ont pas grand intérêt pour ma part.</em></p>

    <p>Allez, pour rendre le tout plus fun, ces codes seront illustrés par <a href="https://http.cat/" rel="nofollow" target="_blank" class="external-link">des chats</a> (c’est cadeau 🎁).</p>

    <h3 id="2xx--tout-va-bien">2xx : <em>Tout va bien</em>
    </h3>

    <p><img src="https://http.cat/204" alt="200 - OK"></p>

    <p>Les statuts 2xx sont retournés par le serveur quand <strong>tout s’est bien passé</strong>.</p>

    <table>
        <thead>
        <tr>
            <th>Code</th>
            <th>Erreur</th>
            <th>Cas d’usage</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>200</td>
            <td><em>OK</em></td>
            <td>Il est utilisé pour <strong>tous les retours d’une API qui se passe bien</strong> et qui ne rentre pas dans les cas suivants.</td>
        </tr>
        <tr>
            <td>201</td>
            <td><em>Created</em></td>
            <td>Il est utilisé lors d’<strong>un retour positif de création</strong> (POST) ou de liaison (PUT) d’une ressource.</td>
        </tr>
        <tr>
            <td>204</td>
            <td><em>No Content</em></td>
            <td>Il est utilisé à la suite d’<strong>une réussite de suppression</strong> (DELETE). <em>Le corps de la réponse doit être vide.</em>
            </td>
        </tr>
        <tr>
            <td>206</td>
            <td><em>Partial Content</em></td>
            <td>Il est utilisé lorsque la collection retournée n’est pas complète. <em>Si la collection contient 2 pages, la première appelée retournera un statut 206 et la deuxième un statut 200.</em>
            </td>
        </tr>
        </tbody>
    </table>

    <h3 id="3xx--regarde-ailleurs">3xx : <em>Regarde ailleurs</em>
    </h3>

    <p><img src="https://http.cat/301" alt="301 - Move Permanently"></p>

    <p>Les status 3xx sont retournées lorsque la ressource est à retrouver ailleurs (dans une autre URL, dans le cache, etc.).</p>

    <table>
        <thead>
        <tr>
            <th>Code</th>
            <th>Erreur</th>
            <th>Cas d’usage</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>301</td>
            <td><em>Moved Permanently</em></td>
            <td>Il est utilisé lorsque <strong>la ressource a été déplacée</strong>. Il est accompagné d’un header <code class="highlighter-rouge">Location: {URL de la ressource}</code>
            </td>
        </tr>
        <tr>
            <td>304</td>
            <td><em>Not Modified</em></td>
            <td>Il est utilisé pour dire au client que <strong>la ressource n’a pas été modifiée depuis son dernier appel</strong>. <em>La ressource ne sera pas renvoyée, le client prendra donc par défaut l’entité en cache.</em>
            </td>
        </tr>
        </tbody>
    </table>

    <h3 id="4xx--tu-tes-planté">4xx : <em>Tu t’es planté</em>
    </h3>

    <p><img src="https://http.cat/404" alt="404 - Not Found"></p>

    <p>Les statuts 4xx sont renvoyés lorsque le client de l’API a fait une erreur ou ne peut pas accéder à la ressource.</p>

    <p>Ces erreurs seront <strong>toujours accompagnées d’un objet “erreur”</strong> (vu précédemment).</p>

    <table>
        <thead>
        <tr>
            <th>Code</th>
            <th>Erreur</th>
            <th>Cas d’usage</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>400</td>
            <td><em>Bad Request</em></td>
            <td>Il est utilisé lorsque le contenu de <strong>la requête ne correspond pas à ce qui est demandé</strong>. <em>Lors de la création d’une entité, si un champ est mal renseigné par exemple.</em>
            </td>
        </tr>
        <tr>
            <td>401</td>
            <td><em>Unauthorized</em></td>
            <td>Il est utilisé lorsque <strong>le client n’a pas accès à la ressource</strong>, car il doit spécifier un toque ou une clé d’API.</td>
        </tr>
        <tr>
            <td>403</td>
            <td><em>Forbidden</em></td>
            <td>Il est utilisé lorsque <strong>le client n’a pas accès à la ressource</strong>. La subtile différence avec la 401 réside dans le fait que même si le client renseigne un toque ou une clé d’API valide, la ressource lui sera toujours refusée.</td>
        </tr>
        <tr>
            <td>404</td>
            <td><em>Not Found</em></td>
            <td>Dois-je réellement vous l’expliquer ? Il est utilisé lorsqu’<strong>une ressource est introuvable</strong>.</td>
        </tr>
        <tr>
            <td>409</td>
            <td><em>Conflict</em></td>
            <td>Il est, par exemple, utilisé lorsque deux ressources sont déjà liées entre-elles suite à un PUT.</td>
        </tr>
        </tbody>
    </table>

    <h3 id="5xx--je-me-suis-planté">5xx : <em>Je me suis planté</em>
    </h3>

    <p><img src="https://http.cat/500" alt="500 - Internal Server Error"></p>

    <p>Les status 5xx sont retournées lorsque le serveur a un problème.</p>

    <p>Ces erreurs seront <strong>toujours accompagnées d’un objet “erreur”</strong> (vu précédemment).</p>

    <table>
        <thead>
        <tr>
            <th>Code</th>
            <th>Erreur</th>
            <th>Cas d’usage</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>500</td>
            <td><em>Internal Server Error</em></td>
            <td>Lorsque le script ne se déroule pas correctement, mais que le client n’y est pour rien.</td>
        </tr>
        </tbody>
    </table>

    <h2 id="exemple">Exemple</h2>

    <p>Comme je vous trouve sympas, je vous donne la documentation complète de l’API d’exemple : <a href="https://musicapi7.docs.apiary.io/#" rel="nofollow" target="_blank" class="external-link">Music API</a>.</p>

    <p>Pour cette documentation, j’ai utilisé <a href="https://apiblueprint.org/" rel="nofollow" target="_blank" class="external-link">API BluePrint</a>, un langage basé sur Markdown, mais axé Rest (je vous ferais un petit article à ce sujet, c’est promis 😉).</p>

    <p><img src="https://media.giphy.com/media/3o85xwxr06YNoFdSbm/giphy.gif" alt="You're Welcome"></p>

    <h2 id="glory-of-rest">Glory of REST</h2>

    <p>Certains formats de ressources permettent d’aller plus loin et d’améliorer l’expérience développeur lors des appels API. Je ne vais pas m’attarder sur ces formats, mon but est simplement de vous faire une petite introduction et vous donner envie d’aller plus loin.</p>

    <h3 id="hateoas">HATEOAS</h3>

    <p>HATEOAS, <em>Hypermedia As The Engine Of Application State</em>, permet de formaliser les ressources de la même manière qu’on le ferait en HTML : <strong>en créant des liens entres-elles</strong>. Cela permet de <strong>naviguer dans l’API sans connaître sa documentation</strong>, mais uniquement son point d’entrée.</p>

    <blockquote>
        <p>Reprenons mon exemple. Voici ce que donnerait un résultat d’album en HATEOAS :</p>

        <div class="language-json highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code><span class="p">{</span><span class="w">
    </span><span class="s2">"id"</span><span class="p">:</span><span class="w"> </span><span class="s2">"628"</span><span class="p">,</span><span class="w">
    </span><span class="s2">"title"</span><span class="p">:</span><span class="w"> </span><span class="s2">"The Groove Sessions"</span><span class="p">,</span><span class="w">
    </span><span class="s2">"artists"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
        </span><span class="p">{</span><span class="w">
            </span><span class="s2">"id"</span><span class="p">:</span><span class="w"> </span><span class="mi">4</span><span class="p">,</span><span class="w">
            </span><span class="s2">"name"</span><span class="p">:</span><span class="w"> </span><span class="s2">"Chinese Man"</span><span class="p">,</span><span class="w">
            </span><span class="s2">"links"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
                </span><span class="p">{</span><span class="w">
                    </span><span class="s2">"rel"</span><span class="p">:</span><span class="w"> </span><span class="s2">"self"</span><span class="p">,</span><span class="w">
                    </span><span class="s2">"href"</span><span class="p">:</span><span class="w"> </span><span class="s2">"/artists/4"</span><span class="w">
                </span><span class="p">}</span><span class="w">
            </span><span class="p">]</span><span class="w">
        </span><span class="p">}</span><span class="w">
  	</span><span class="p">],</span><span class="w">
    </span><span class="s2">"year"</span><span class="p">:</span><span class="w"> </span><span class="s2">"2007"</span><span class="p">,</span><span class="w">
    </span><span class="s2">"created_at"</span><span class="p">:</span><span class="w"> </span><span class="s2">"1535021696"</span><span class="p">,</span><span class="w">
    </span><span class="s2">"links"</span><span class="p">:</span><span class="w"> </span><span class="p">[</span><span class="w">
        </span><span class="p">{</span><span class="w">
            </span><span class="s2">"rel"</span><span class="p">:</span><span class="w"> </span><span class="s2">"list"</span><span class="p">,</span><span class="w">
            </span><span class="s2">"href"</span><span class="p">:</span><span class="w"> </span><span class="s2">"/albums"</span><span class="p">,</span><span class="w">
        </span><span class="p">},</span><span class="w">
        </span><span class="p">{</span><span class="w">
            </span><span class="s2">"rel"</span><span class="p">:</span><span class="w"> </span><span class="s2">"self"</span><span class="p">,</span><span class="w">
            </span><span class="s2">"href"</span><span class="p">:</span><span class="w"> </span><span class="s2">"/albums/628"</span><span class="w">
        </span><span class="p">},</span><span class="w">
        </span><span class="p">{</span><span class="w">
            </span><span class="s2">"rel"</span><span class="p">:</span><span class="w"> </span><span class="s2">"tracks"</span><span class="p">,</span><span class="w">
            </span><span class="s2">"href"</span><span class="p">:</span><span class="w"> </span><span class="s2">"/albums/628/tracks"</span><span class="w">
        </span><span class="p">}</span><span class="w">
    </span><span class="p">]</span><span class="w">
</span><span class="p">}</span><span class="w">
</span></code></pre></div>  </div>
    </blockquote>

    <h3 id="json-schema">JSON Schema</h3>

    <p>Le but ici est de <strong>documenter notre API</strong> en utilisant un schéma. C’est très utile pour tester que le retour d’une API est conforme à sa documentation, mais aussi pour créer les modèles dans notre langage de programmation préféré.</p>

    <blockquote>
        <p>Dans mon exemple d’API, un album se présente comme ceci :</p>

        <div class="language-json highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code><span class="p">{</span><span class="w">
  </span><span class="s2">"$schema"</span><span class="p">:</span><span class="w"> </span><span class="s2">"http://json-schema.org/draft-04/schema#"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"object"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"properties"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
    </span><span class="s2">"id"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
      </span><span class="s2">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"string"</span><span class="w">
    </span><span class="p">},</span><span class="w">
    </span><span class="s2">"title"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
      </span><span class="s2">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"string"</span><span class="w">
    </span><span class="p">},</span><span class="w">
    </span><span class="s2">"artists"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
      </span><span class="s2">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"array"</span><span class="w">
    </span><span class="p">},</span><span class="w">
    </span><span class="s2">"year"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
      </span><span class="s2">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"string"</span><span class="w">
    </span><span class="p">},</span><span class="w">
    </span><span class="s2">"created_at"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span><span class="w">
      </span><span class="s2">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"string"</span><span class="w">
    </span><span class="p">}</span><span class="w">
  </span><span class="p">}</span><span class="w">
</span><span class="p">}</span><span class="w">
</span></code></pre></div>  </div>
    </blockquote>

    <h3 id="jsonld">JSONLD</h3>

    <p>À la manière du JSON Schéma, le but est de décrire nos ressources, mais cette fois-ci dans des <strong>schémas standardisés</strong>.</p>

    <blockquote>
        <p>Prenons l’exemple de la documentation. Si la ressource est une personne, je ne vais pas réinventer les informations d’une personne, donc je peux directement utiliser un schéma standard de Personne : <a href="https://json-ld.org/contexts/person.jsonld" rel="nofollow" target="_blank" class="external-link">https://json-ld.org/contexts/person.jsonld</a>.</p>

        <div class="language-json highlighter-rouge">
            <div class="highlight"><pre class="highlight"><code><span class="p">{</span><span class="w">
  </span><span class="s2">"@context"</span><span class="p">:</span><span class="w"> </span><span class="s2">"https://json-ld.org/contexts/person.jsonld"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"@id"</span><span class="p">:</span><span class="w"> </span><span class="s2">"http://dbpedia.org/resource/John_Lennon"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"name"</span><span class="p">:</span><span class="w"> </span><span class="s2">"John Lennon"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"born"</span><span class="p">:</span><span class="w"> </span><span class="s2">"1940-10-09"</span><span class="p">,</span><span class="w">
  </span><span class="s2">"spouse"</span><span class="p">:</span><span class="w"> </span><span class="s2">"http://dbpedia.org/resource/Cynthia_Lennon"</span><span class="w">
</span><span class="p">}</span><span class="w">
</span></code></pre></div>  </div>
    </blockquote>

    <h2 id="pour-aller-plus-loin">Pour aller plus loin</h2>

    <p>Et voilà, vous voyez ce n’est pas très complexe !</p>

    <p><img src="https://media.giphy.com/media/zcCGBRQshGdt6/giphy.gif" alt="GIF: ... That was easy !"></p>

    <p>Maintenant, si vous êtes dev back, vous n’aurez plus aucune excuse pour oublier un status code. Et si vous êtes dev front, partagez cet article à votre dev back !</p>

    <p>Comme toujours, je vous mets quelques liens que je trouve intéressants à ce sujet :</p>

    <ul>
        <li>
            <a href="https://www.restapitutorial.com/" rel="nofollow" target="_blank" class="external-link">A RESTful Tutorial</a> (en anglais)</li>
        <li>
            <a href="https://blog.octo.com/wp-content/uploads/2014/12/OCTO-Refcard_API_Design_EN_3.0.pdf" rel="nofollow" target="_blank" class="external-link">Quick Card Reference</a> (PDF, en anglais)</li>
        <li>
            <a href="http://putaindecode.io/fr/articles/api/hateoas/" rel="nofollow" target="_blank" class="external-link">HATEOAS, le Graal des développeurs d’API</a> (en français)</li>
        <li>
            <a href="https://musicapi7.docs.apiary.io" rel="nofollow" target="_blank" class="external-link">Exemple d’API</a> (en anglais)</li>
    </ul>

    <p>N’hésitez pas à <strong>partager cet article</strong> et envoyer <strong>vos questions ou vos ressources en commentaires</strong> !</p>

    <p><img src="https://media.giphy.com/media/l1J3CbFgn5o7DGRuE/giphy.gif" alt="GIF: See You Soon!"></p>

    <p>À bientôt ! Q.</p>

</article>`;
