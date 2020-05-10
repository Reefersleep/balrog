(ns app.main
  (:require [reagent.core :as r]))

(defn app
  []
  [:div {:style {:margin "auto"
                 :margin-top "100px"
                 :width "600px"}}
   [:h1 "hi"]])

(defn ^:dev/after-load start []
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))
