require 'test_helper'

class MushroomsControllerTest < ActionController::TestCase
  setup do
    @mushroom = mushrooms(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:mushrooms)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mushroom" do
    assert_difference('Mushroom.count') do
      post :create, mushroom: { description: @mushroom.description, difficulty: @mushroom.difficulty, fruit_time_max: @mushroom.fruit_time_max, fruit_time_min: @mushroom.fruit_time_min, latin_name: @mushroom.latin_name, price_per_ounce: @mushroom.price_per_ounce, spawn_time_min: @mushroom.spawn_time_min, spwan_time_max: @mushroom.spwan_time_max, substrate: @mushroom.substrate, variety: @mushroom.variety }
    end

    assert_redirected_to mushroom_path(assigns(:mushroom))
  end

  test "should show mushroom" do
    get :show, id: @mushroom
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @mushroom
    assert_response :success
  end

  test "should update mushroom" do
    put :update, id: @mushroom, mushroom: { description: @mushroom.description, difficulty: @mushroom.difficulty, fruit_time_max: @mushroom.fruit_time_max, fruit_time_min: @mushroom.fruit_time_min, latin_name: @mushroom.latin_name, price_per_ounce: @mushroom.price_per_ounce, spawn_time_min: @mushroom.spawn_time_min, spwan_time_max: @mushroom.spwan_time_max, substrate: @mushroom.substrate, variety: @mushroom.variety }
    assert_redirected_to mushroom_path(assigns(:mushroom))
  end

  test "should destroy mushroom" do
    assert_difference('Mushroom.count', -1) do
      delete :destroy, id: @mushroom
    end

    assert_redirected_to mushrooms_path
  end
end
