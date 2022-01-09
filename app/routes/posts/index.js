import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class PostsIndexRoute extends Route {
    @service store;
    model() {
        
        return this.store.findAll('post');
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.set('posts', model);
    }
}
